import API from 'utils/api';

type TGetInitialData = (node: string) => Promise<{ rootNode: string; catalog: string }>;

const getInitialData: TGetInitialData = async (node) => {
  const rootNode = await API.request({ url: `/catalogs/${node}/path` }).then((response) => {
    return response.data.shift().uuid;
  });

  const config = {
    url: `/catalogs`,
    headers: {
      'x-search-conditions': JSON.stringify({ filter: { tree: rootNode } }),
    },
  };

  const catalog = await API.request(config).then((response) => {
    return response.data.shift().uuid;
  });

  return { rootNode, catalog };
};

export { getInitialData };
