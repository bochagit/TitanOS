async function getStudents(){
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/students`)
  return res.json()
}

export default async function StudentsPage(){
  const students = await getStudents()

  return (
    <div>
      <h1>Alumnos</h1>

      {students.map((s: any) => (
        <div key={s.id}>
          {s.name}
        </div>
      ))}
    </div>
  )
}