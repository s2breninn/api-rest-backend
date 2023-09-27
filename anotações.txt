import Aluno from '../models/Aluno'

class HomeController{
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Breno',
      sobrenome: 'Mendes',
      email: 'b.mendesbernardo2020@gmail.com',
      idade: 19,
      peso: 57,
      altura: 2,
    })
    res.json(novoAluno)
  }
}

export default new HomeController()