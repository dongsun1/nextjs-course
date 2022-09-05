import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  const loadProjectHandler = () => {
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "max", clientProjectId: "projectA" },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
