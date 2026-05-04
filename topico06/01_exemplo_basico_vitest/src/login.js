import {users} from "./mocks/users";

export function fazerLogin(email, senha) {
  const user = users.find(user=>user.email==email)
  if(user && user.password === senha)
  // if(user)
     return { sucesso: true, mensagem: "Login bem-sucedido!" };
 
  return { sucesso: false, mensagem: "Credenciais inválidas." };
}