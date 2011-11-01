# Open cloud application architecture

Based on our experience deploying and managing thousands of scaled web applications, Engine Yard 
has developed a reference open source architecture. It comprises of technology components with 
known parameters for scalability, performance and reliability. 

The Engine Yard architecture treats the Rails application tier as stateless and scale-out. Application 
state should be persisted to an in-memory cache, or directly to data store. We improve scalability by 
offloading tasks to background job processors either directly or via a message bus.

The Engine Yard data tier achieves scalability and performance by offloading specialized tasks such 
as content indexing to a specialist indexing and search component, and by leveraging key-value stores 
for functional specific storage tasks. Functional partitioning and (if required) application level 
sharding provides further options for scaling.

<img src="/images/cloud-architecture.png" />

## Technology stack

For specific components supported in each of these functional areas, please see our current 
[[Engine Yard Technology Stack|cloud-tech-stack]].

