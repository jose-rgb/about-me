import { EnvelopeSimple, GithubLogo, LinkedinLogo, TagChevron, WhatsappLogo } from "@phosphor-icons/react"
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
      <header className="bg-zinc-950 flex justify-center  h-16 w-screen fixed top-0">
        <div className="w-[90%] flex items-center p-4 justify-between border-b-2 border-[#151515]">
          <h1 className="text-2xl">{'<JR/>'}</h1>
          <ul className="flex gap-10">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#projects">Projetos</a></li>
          </ul>
        </div>
      </header>

      <main className="flex justify-center mt-32 h-[70%]">
        <div className="flex items-center justify-between w-[90%] p-20">

          <div className="text-2xl">
            <h1>Olá, me chamo</h1>
            <span className="text-5xl font-bold text-[#00A3FF]">José Ricardo</span>
            <h1>Desenvolvedor Full Stack</h1>

            <a href={cv} download="Curriculo">
              <button className="bg-[#00a2ffe4] mt-10 font-bold text-sm rounded py-2 px-10 hover:bg-[#00A3FF]">
                Baixar Currículo
              </button>
            </a>
          </div>

          <div id="gradient" className="rounded-full p-24">
            <img src={ImgMe} alt="developer" className="w-96 rounded-b-full"/>
          </div>

        </div>
      </main>

      <main id="about" className="flex bg-[#151515] justify-center mt-24 h-[90%]">
        <div className="w-[90%] p-20">

          <div className="flex gap-2 text-[#00A3FF] mt-10">
            <TagChevron size={32}  weight="thin" />
            <h1 className="text-2xl">Sobre mim</h1>
          </div>

          <p className="mt-10">Sou aluno do curso de tecnologia em Análise e Desenvolvimento de sistemas no Instituto Federal do Piauí. onde ingressei em 2020, desde então estudo frequentemente vária tecnologias, sendo as de Front End que mais me chamam atenção, no entanto, estudo também o desenvolvimento de Rest APIs e aplicativos multiplataforma.</p>

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
      </main>


      <main className="flex justify-center mt-24 h-[70%]">
        <div className="flex items-center justify-between w-[90%] p-20">



        </div>
      </main>

    </div>
  )
}

