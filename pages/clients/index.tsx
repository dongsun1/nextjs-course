import Link from "next/link";

interface Client {
  id: string;
  name: string;
}

interface Clients extends Array<Client> {}

const ClientsPage = () => {
  const clients: Clients = [
    { id: "max", name: "Maximilian" },
    { id: "menu", name: "Manuel" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
