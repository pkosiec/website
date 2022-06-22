Imagine that you want to create a UI for your Kubernetes custom resources. You could use Kubernetes API directly, but in most cases, it's better to write your own service which will implement the custom logic and expose a convenient API for the front-end.

Based on our experience in building such a production-grade solution, you will learn:

- Why we chose GraphQL.
- How we minimized load on the kube-apiserver.
- How we went beyond filtering by labels and created more powerful queries for Kubernetes resources.
- How we secured the GraphQL API.
