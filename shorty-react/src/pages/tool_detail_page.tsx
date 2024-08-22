import { useParams } from "react-router-dom";

function ToolDetailPage() {
  const { tool } = useParams();

  return <h1>Here you can find shortcuts for: {tool?.toUpperCase()}</h1>;
}

export default ToolDetailPage;
