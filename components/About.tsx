import React from 'react';
import Image from 'next/image';
import { Award, BookOpen, Heart } from 'lucide-react';
import felineImage from '@/public/images/felino.webp';
import jabutiImage from '@/public/images/jabuti.webp';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <Image
                  src={felineImage}
                  alt="Dra. Isadora Nascimento examinando uma onça-pintada anestesiada"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
                  width={512}
                  height={512}
                  sizes="(min-width: 1024px) 240px, 45vw"
                />
                <Image
                  src={jabutiImage}
                  alt="Dra. Isadora Nascimento segurando um jabuti"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                  width={512}
                  height={512}
                  sizes="(min-width: 1024px) 240px, 45vw"
                />
             </div>
             {/* Decorative box */}
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-slate-100 rounded-3xl" />
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <p className="text-sm font-bold tracking-widest text-primary-700 uppercase mb-3">Sobre Mim</p>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Cuidado especializado para quem cuida do diferente.
            </h2>
            
            <div className="space-y-4 text-slate-700 font-medium leading-relaxed mb-8 text-lg">
              <p>
                Sou Isadora Nascimento, médica veterinária e mestre em Ciência Animal pela UFG. Minha formação e minha prática são dedicadas aos animais silvestres e exóticos, da clínica de aves e répteis ao manejo em zoológico e ao atendimento de fauna resgatada com o CETAS/IBAMA.
              </p>
              <p>
                Hoje levo essa experiência até a sua casa. O atendimento a domicílio reduz o estresse do transporte, que é especialmente arriscado para aves, répteis e pequenos mamíferos, e permite avaliar o ambiente, a alimentação e a rotina do animal onde ele realmente vive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-slate-100">
                <Award className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 text-base">Ética</h3>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-slate-100">
                <BookOpen className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 text-base">Pesquisa</h3>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-center hover:shadow-md transition-shadow border border-slate-100">
                <Heart className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <h3 className="font-bold text-slate-900 text-base">Cuidado</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
