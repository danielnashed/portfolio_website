import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import ForceGraph2D with SSR disabled
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
});

export default function TechStackGraph({ skillGroups, dimensions }) {
  const containerRef = useRef();

  // Create nodes and links for the graph
  const createGraphData = () => {
    const nodes = [];
    const links = [];

    // Add head nodes for each group
    Object.keys(skillGroups).forEach((groupName, groupIndex) => {
      nodes.push({
        id: groupName,
        group: groupIndex,
        isHeadNode: true,
        val: 20, // Larger size for head nodes
      });
    });

    // Connect head nodes to each other
    for (let i = 0; i < Object.keys(skillGroups).length; i++) {
      for (let j = i + 1; j < Object.keys(skillGroups).length; j++) {
        links.push({
          source: Object.keys(skillGroups)[i],
          target: Object.keys(skillGroups)[j],
          color: 'rgba(255, 255, 255, 0.4)',
          value: 4,
        });
      }
    }

    // Add skill nodes and connect them to their head nodes
    Object.entries(skillGroups).forEach(([groupName, skills], groupIndex) => {
      skills.forEach((skill) => {
        nodes.push({
          id: skill,
          group: groupIndex,
          val: 10,
          isHeadNode: false,
        });

        links.push({
          source: groupName,
          target: skill,
          color: 'rgba(255, 255, 255, 0.4)',
          value: 2,
        });
      });
    });

    return { nodes, links };
  };

  const graphData = createGraphData();

  return (
    <div ref={containerRef} className="bg-black p-6 flex justify-center items-center">
      <ForceGraph2D
        graphData={graphData}
        nodeId="id"
        nodeAutoColorBy="group"
        nodeRelSize={6}
        nodeVal={(node) => node.val}
        nodeCanvasObject={(node, ctx, globalScale) => {
          const label = node.id;
          let fontSize = node.isHeadNode ? 10 / (globalScale / 2) : 9 / (globalScale / 2);
          ctx.font = `${node.isHeadNode ? 'bold ' : ''}${fontSize}px Sans-Serif`;
          ctx.fillStyle = node.color;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Draw background circle for head nodes
          if (node.isHeadNode) {
            ctx.beginPath();
            ctx.arc(node.x, node.y, 30 / (globalScale / 2), 0, 2 * Math.PI);
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.fill();
            ctx.strokeStyle = node.color;
            ctx.lineWidth = 1 / (globalScale / 2);
            ctx.stroke();
          }

          // Draw text
          ctx.fillStyle = node.isHeadNode ? '#ffffff' : node.color;
          ctx.fillText(label, node.x, node.y);
        }}
        linkWidth={(link) => link.value}
        linkColor={(link) => link.color}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={(d) => 0.005}
        width={dimensions.width}
        height={dimensions.height}
        cooldownTicks={200} //100
        cooldownTime={3000} //2000
        d3AlphaDecay={0.02}
        d3VelocityDecay={0.1}
        d3Force={(engine) => {
        // Customize forces to better separate groups
        engine.force('charge').strength(-1000);
        engine.force('link').distance((link) =>
        link.source.isHeadNode && link.target.isHeadNode ? 500 : 100);
        engine.force('center', d3.forceCenter(dimensions.width / 2, dimensions.height / 2));
        }}
        onEngineStop={() => console.log('Engine stopped')}
      />
    </div>
  );
}