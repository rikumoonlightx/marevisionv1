interface Props {
  params: { id: string }
}

export default function StylePage({ params }: Props) {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold">Style ID: {params.id}</h1>
      <p className="mt-2">Details for style {params.id} will be loaded here.</p>
    </main>
  )
}
