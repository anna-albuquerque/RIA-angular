# **Projeto “Nanny's Pets”**
## **Especificação de Caso de Uso**
### **Buscar Cuidador**

**Histórico da Revisão**
| **Data** | **Versão** | **Descrição** | **Autor** |
| --- | --- | --- | --- |
| 23/05/2023 | 1.0 | Buscar cuidador | Anna Carolinne |
| 30/05/2023 | 1.1 | Revisão dos detalhamentos para simplificar | Anna Carolinne |
| 02/01/2024 | 2.0 | Atualização do detalhamento | Virginia Menezes |
| 05/01/2024 | 2.0 | Atualização do detalhamento | Anna Carolinne |
| 27/11/2024 | 2.1 | Atualização do detalhamento | Anna Carolinne |
</br>

### **1 Resumo**
O tutor busca um cuidador através das características que o cuidador preencheu no cadastro e da localidade. </br></br>

### **2 Atores**
2.1 Tutor </br></br>

### **3 Precondições**  
3.1 O cuidador realiza login no “Nanny's Pets”.</br></br>

### **4 Pós-condições**  
4.1 O tutor terá uma listagem de cuidadores que atendem aos requisitos que ele precisa.  </br></br>


### **5 Fluxos de evento**
**5.1 Fluxo básico**

| **Ações do ator** | **Ações do sistema** | 
| --- | --- |
| 1. Acessar a plataforma |	Carregar página inicial da plataforma Nanny’s Pet |  
| 2. Fazer login | Sistema atualiza a página inicial, com o usuário já logado na plataforma Nanny’s Pet |  
| 3. Clicar em "Nossos Cuidadores"	| O sistema carrega a página com a barra de pesquisa por cidade / localidade |  
| 4. Digitar a cidade (a busca vai sendo filtrada a cada letra que é digitada) |  O sistema exibirá todos os cuidadores daquela localidade |  
</br>
  

**5.1 Fluxo alternativo**

| **Ações do ator** | **Ações do sistema** | 
| --- | --- |
| 1. Acessar a plataforma | Carregar página inicial da plataforma Nanny’s Pet |  
| 2. Fazer login | Sistema atualiza a página inicial, com o usuário já logado na plataforma Nanny’s Pet |  
| 3. Clicar em "Nossos Cuidadores"	| O sistema carrega a página com a barra de pesquisa por cidade / localidade |  
| 4. Digitar a cidade (a busca vai sendo filtrada a cada letra digitada) | O sistema vai atualizando a página e não exibe nenhum cuidador |  
  </br>
    
  **5.2 Fluxo alternativo**

| **Ações do ator** | **Ações do sistema** | 
| --- | --- |
| 1. Acessar a plataforma | Carregar página inicial da plataforma Nanny’s Pet |  
| 2. Clicar em “Nossos Cuidadores” | A página dos cuidadores só é visível para usuários logados. O sistema atualiza a página com a mensagem “Bem vindo(a) à Plataforma!” e solicitando _'Nome de Usuário'_ e _'Senha'_ para Login. |
| 3. Fazer cadastro	| Usuário clica em _“Cadastre-se”_ |

-----------------------------------
