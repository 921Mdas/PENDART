export const TruncBidData = async data => {
  await data;
  if (data === undefined || data === null) return;
  const { price, name, id, image, creator, description } = data;
  return {
    price,
    name,
    id,
    image,
    creator,
    description,
  };
};
