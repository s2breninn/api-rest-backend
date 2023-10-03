import Aluno from '../models/Aluno'

class HomeController{
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria Clara',
      sobrenome: 'Mendes Bernardo',
      email: 'm.mendesbernardo2020@gmail.com',
      idade: 16,
      peso: 55,
      altura: 1.68,
    })
    res.json(novoAluno)
  }
}

export default new HomeController()