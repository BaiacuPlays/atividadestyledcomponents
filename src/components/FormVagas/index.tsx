import { FormEvent, useState } from 'react'

import { Formvagaestilo } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <form className={Formvagaestilo.form} onSubmit={aoEnviarForm}>
      <input
        className={Formvagaestilo.campo}
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <button className={Formvagaestilo.btnPesquisar} type="submit">
        Pesquisar
      </button>
    </form>
  )
}
export default FormVagas
