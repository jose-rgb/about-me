import { BracketsAngle, Briefcase, CalendarBlank, Code, DeviceMobileCamera, Devices, EnvelopeSimple, FigmaLogo, Files, GithubLogo, HardDrives, LinkedinLogo, TagChevron, WhatsappLogo } from "@phosphor-icons/react"
import cv from "./assets/cv.pdf"
import ImgMe from "./assets/me.png"
import { toast } from 'react-toastify'

export function App() {
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success('E-mail copiado para a área de transferência');
    } catch (err) {
      toast.error('falha ao copiar E-mail');
    }
  };

  return (
    <div className="h-screen">
      <header className="bg-zinc-950 flex justify-center  h-18 w-screen fixed top-0">
        <div className="w-[90%] flex items-center p-4 justify-between border-b-2 border-[#151515]">
          <h1 className="text-2xl">{'<JR/>'}</h1>
          <ul className="flex gap-10">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#experience">Serviços</a></li>
            <li><a href="#projects">Projetos</a></li>
          </ul>
        </div>
      </header>


      <main className=" flex flex-col  items-center">

        <div className="flex items-center justify-between w-[90%] h-[1000px] p-20">
          <div className="text-2xl mb-20">
            <h1>Olá, me chamo</h1>
            <span className="text-5xl font-bold text-[#00A3FF]">José Ricardo</span>
            <h1>Desenvolvedor Full Stack</h1>

            <a href={cv} download="Curriculo">
              <button className="bg-[#00a2ffe4] mt-10 font-bold text-sm rounded py-2 px-10 hover:bg-[#00A3FF]">
                Baixar Currículo
              </button>
            </a>
          </div>

          <div className="rounded-full p-10 mb-24">
            <img src={ImgMe} alt="developer" className="w-[500px] rounded-b-full border-b-8 border-[#00A3FF]"/>
          </div>
        </div>
   


        <div id="about" className="w-[100%] bg-[#151515] flex flex-col  items-center p-20">

          <div className="flex w-[100%] items-center justify-center gap-2 text-[#00A3FF] mt-10">
            <TagChevron size={32}  weight="fill" />
            <h1 className="text-3xl">Sobre mim</h1>
          </div>

          <p className="mt-10 w-[80%]">Sou aluno do curso de tecnologia em Análise e Desenvolvimento de sistemas no Instituto Federal do Piauí. 
            onde ingressei em 2020, desde então estudo frequentemente vária tecnologias, sendo as de Front End que mais me chamam atenção, 
            no entanto, estudo também o desenvolvimento de Rest APIs e aplicativos multiplataforma. Atualmente focado em ser um desenvolvedor Full Stack
            focado no universo do Javascript.</p>

          <ul className="w-[100%] mt-24 flex justify-center gap-10">
            <li>
              <a href="https://www.linkedin.com/in/jos%C3%A9-ricardo-aa97a41b2/" target="_blank">
                <div className="flex flex-col items-center p-4 rounded-full"><LinkedinLogo size={32} color="#00A3FF" weight="fill" />
                  <span className="text-sm">Linkedin</span>
                  <h2>Jośe Ricardo</h2>
                </div>
              </a>
            </li>

            <li>
              <a href="https://github.com/jose-rgb" target="_blank">
                <div className="flex flex-col items-center p-4 rounded-full"><GithubLogo  size={32} color="#00A3FF" weight="fill" />
                  <span className="text-sm">GitHub</span>
                  <h2>jose-rgb</h2>
                </div>
              </a>
            </li>

            <li>
              <button onClick={() => copyToClipboard('josericardosaraiva7@gmail.com')}>
                <div className="flex flex-col items-center p-4 rounded-full"><EnvelopeSimple size={32} color="#00A3FF" weight="fill" />
                  <span className="text-sm">E-mail</span>
                  <h2>josericardosaraiva7@gmail.com</h2>
                </div>
              </button>
            </li>

            <li>
              <a href="https://wa.me/86994568903?text=Olá" target="_blank">
                <div className="flex flex-col items-center p-4 rounded-full"><WhatsappLogo size={32} color="#00A3FF" weight="fill" />
                  <span className="text-sm">Número</span>
                 <h2>(86) 99435-1775</h2>
                </div>
              </a>
            </li>
          </ul>

        </div>
   


        <div id="experience" className="w-[90%] p-20">
          <div className="w-[100%] flex items-center justify-center gap-2 text-[#00A3FF] mb-10">
            <Briefcase size={32}  weight="fill" />
            <h1 className="text-3xl">Experiência</h1>
          </div>

          <div className="flex items-center  border-b-2 border-[#151515]  justify-center">
            <div className="w-[30%] mt-26 ml-40">
              <p>1 ano</p>
            </div>


            <div className="w-[40%]  border-l-2 border-[#151515]  p-4 text-sm">
              <h1><strong className="text-[#00A3FF] ">Estagiário</strong> na empresa: <strong>Alemanha Veículos</strong></h1>
              <p className="flex items-center my-2 gap-2"><CalendarBlank size={16} color="#ffffff" weight="fill" /> Março/2022 ⇾ Março/2023</p>
              <p>Principais habilidades usadas: <strong className="text-[#00A3FF] ">Ruby on Rails, ReactJs, React Native </strong></p>
              <br />
              <strong>Descrição das atividades:</strong>
              <p>Por meio do home office auxiliava na manutenção de projetos internos
                com o framework Ruby on Rails, especialmente na sua versão 6. Além da
                utilização do software Jira para desenvolvimento ágil com a metodologia
                Scrum, e com seus rituais, como Daily Meetings, Sprint Review e Planning. Além
                do Slack para manter comunicação. Também acompanhei o desenvolvimento do aplicativo Meio Norte Play feito em React Native para a empresa filial Meio Norte TV.
              </p>
            </div>
          </div>


          <div className="flex items-center border-b-2 border-[#151515]  justify-center">
            <div className="w-[30%] mt-26 ml-40">
              <p>1 ano e 11 meses</p>
            </div>


            <div className="w-[40%]  border-l-2 border-[#151515]  p-4 text-sm">
              <h1><strong className="text-[#00A3FF] mt-4">Estagiário</strong> na empresa: <strong>Agespisa</strong></h1>
              <p className="flex items-center my-2 gap-2"><CalendarBlank size={16} color="#ffffff" weight="fill" />  Abril/2020 ⇾  Março/2022</p>
              <p>Principais habilidades usadas: <strong className="text-[#00A3FF] ">Javascript, HTML5, CSS3, JavaEE </strong></p>
              <br />
              <strong>Descrição das atividades:</strong>
              <p>
                Devido a Águas e Esgotos do Piauí (Agespisa), ser uma empresa pública e com sistemas legados, meu papel como estagiário 
                se dava em alterar pequenas funcionalidades do layout de paginas web, modificando o css, html e javascript dos sistemas feitos em Java Platform, Enterprise Edition (Java EE).
              </p>
            </div>
          </div>


          <div className="flex items-center justify-center">
            <div className="w-[30%] mt-26 ml-40">
              <p>2 anos</p>
            </div>

            <div className="w-[40%]  border-l-2 border-[#151515]  p-4 text-sm">
              <h1><strong className="text-[#00A3FF] mt-4">Jovem Aprendiz</strong> na empresa: <strong>Agespisa</strong></h1>
              <p className="flex items-center my-2 gap-2"><CalendarBlank size={16} color="#ffffff" weight="fill" /> Abril/2018 ⇾  Abril/2020</p>
              <p>Principais habilidades usadas: <strong className="text-[#00A3FF] ">Formatação de computadores, Softwares de acesso remoto </strong></p>
              <br />
              <strong>Descrição das atividades:</strong>
              <p>
                Auxiliava no suporte a colaboradores da empresa, tanto na sede em Teresina, como nos 
                interiores do Piauí de forma presencial e online pelos programas VNC, TeamViewer e AnyDesk.
              </p>
            </div>
          </div>

        </div>


        <div id="services" className="w-[90%] p-20">

          <div className="w-[100%] flex items-center justify-center gap-2 text-[#00A3FF] mb-10">
            <Code size={36}  weight="fill" />
            <h1 className="text-3xl">Serviços</h1>
          </div>

          <div className="w-[100%] flex items-center justify-center mt-20">
            <ul className="flex justify-center gap-10 flex-wrap">
              <li className="w-[374px] h-[210px] p-6 rounded-md bg-[#151515] shadow-shape border-b-2 border-[#00A3FF]">
                <div>
                  <BracketsAngle size={42} color="#00A3FF" />
                  <h1 className="font-bold text-[22px] mt-20">Criação de sites</h1>
                </div>
              </li>

              <li className="w-[374px] h-[210px] p-6 rounded-md bg-[#151515] shadow-shape border-b-2 border-[#00A3FF]">
                <div>
                  <DeviceMobileCamera size={42} color="#00A3FF" />
                  <h1 className="font-bold text-[22px] mt-20">Criação de aplicativos</h1>
                </div>
              </li>

              <li className="w-[374px] h-[210px] p-6 rounded-md bg-[#151515] shadow-shape border-b-2 border-[#00A3FF]">
                <div>
                  <Devices  size={42} color="#00A3FF" />
                  <h1 className="font-bold text-[22px] mt-20">Sites responsivos</h1>
                </div>
              </li>

              <li className="w-[374px] h-[210px] p-6 rounded-md bg-[#151515] shadow-shape border-b-2 border-[#00A3FF]">
                <div>
                  <HardDrives size={42} color="#00A3FF" />
                  <h1 className="font-bold text-[22px] mt-20">Criação de APIs</h1>
                </div>
              </li>

              <li className="w-[374px] h-[210px] p-6 rounded-md bg-[#151515] shadow-shape border-b-2 border-[#00A3FF]">
                <div>
                  <Files size={42} color="#00A3FF" />
                  <h1 className="font-bold text-[22px] mt-16">Consultoria de desenvolvimento de sistemas</h1>
                </div>
              </li>

              <li className="w-[374px] h-[210px] p-6 rounded-md bg-[#151515] shadow-shape border-b-2 border-[#00A3FF]">
                <div>
                  <FigmaLogo  size={42} color="#00A3FF" />
                  <h1 className="font-bold text-[22px] mt-20">Front end de alta fidelidade</h1>
                </div>
              </li>

            </ul>
          </div>

        </div>

      </main>
    </div>
  )
}

