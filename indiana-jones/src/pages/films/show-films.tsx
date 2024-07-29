import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";
import { useParams } from "react-router-dom";
import { Film } from "../../interfaces/models.interfaces";

const { Title } = Typography;

export const FilmShow: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { queryResult } = useShow<Film>({
    resource: "films",
    id,
  });
  const { data, isLoading } = queryResult;

  const record = data?.data as Film;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>ID</Title>
      <TextField value={record?.id} />
      <Title level={5}>Title</Title>
      <TextField value={record?.title} />
      <Title level={5}>Director</Title>
      <TextField value={record?.director} />
      <Title level={5}>Duration</Title>
      <TextField value={record?.duration} />
      <Title level={5}>Release Date</Title>
      <TextField value={record?.date} />
    </Show>
  );
};
