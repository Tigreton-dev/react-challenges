import { SortBy, type User } from '../types.d'

interface Props {
  changeSorting: (sort: SortBy) => void
  deleteUser: (email: string) => void
  showColors: boolean
  users: User[]
}

export function UsersList ({ changeSorting, deleteUser, showColors, users }: Props) {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Foto</th>
          <th className='pointer' onClick={() => { changeSorting(SortBy.NAME) }}>Nombre</th>
          <th className='pointer' onClick={() => { changeSorting(SortBy.LAST) }}>Apellido</th>
          <th className='pointer' onClick={() => { changeSorting(SortBy.COUNTRY) }}>País</th>
          <th>Acciones</th>
        </tr>
      </thead>

      <tbody className={showColors ? 'table--showColors' : ''}>
        {
          users.map((user) => {
            return (
              <tr key={user.email}>
                <td className='border-solid border red flex justify-center'>
                  <img src={user.picture.thumbnail} />
                </td>
                <td className='border-solid border red'>
                  {user.name.first}
                </td>
                <td className='border-solid border white'>
                {user.name.last}
                </td>
                <td className='border-solid border white'>
                  {user.location.country}
                </td>
                <td className='border-solid border white'>
                  <button onClick={() => {
                    deleteUser(user.email)
                  }}>Borrar</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
