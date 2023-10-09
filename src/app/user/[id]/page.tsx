export default function ProfilePage({ params }: { params: { id: string } }) {
    return <div>User : {params.id}</div>
}
