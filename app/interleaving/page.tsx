import ServerCompOne from "@/components/server-component-one";

import ClientComponentOne from "@/components/client-component-one";

const InterLeaving = () => {
  return (
    <div>
      <h1>InterLeaving</h1>
      <ClientComponentOne>
        <ServerCompOne />
      </ClientComponentOne>
    </div>
  );
};

export default InterLeaving;
