const UserDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <div>UserDetailsPage : { id }</div>;
};
export default UserDetailsPage;
