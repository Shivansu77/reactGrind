type ProductsIdPageProps = {
  params: {
    id: string;
  };
};


export default async function ProductsIdPage({
  params,
}: ProductsIdPageProps) {
  const { id } = await params;
  return (
    <div style={{ color: "#111", fontSize: "24px", fontWeight: 600 }}>
      ProductsIdPage {id}
    </div>
  );
}