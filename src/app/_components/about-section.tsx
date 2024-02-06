import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  YoutTubeIcon,
} from "@/components/social-icons";
import Image from "next/image";
import Link from "next/link";

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group:hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:dark:fill-zinc-300" />
    </Link>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="container flex flex-col md:max-w-[64rem] md:py-12 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows[auto-1-fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src="/avatar.jpeg"
              alt="Jorginho Beach"
              width={800}
              height={800}
              quality={100}
              priority={true}
              className="aspect-square rotate-3 rounded-lg bg-zinc-100 object-cover"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl">
            @jorginhobeach
          </h1>
          <p className="mt-6 text-base text-muted-foreground">
            Jorginho(Jorginho Beach Tennis), é um destacado jogador de beach
            tennis que começou sua jornada nas praias de sua cidade natal no
            Brasil. Além de ser um atleta excepcional, ele também se dedica a
            ensinar e promover o beach tennis, oferecendo treinamento para
            jovens atletas e trabalhando para aumentar a visibilidade e o acesso
            ao esporte. Sua jornada é um exemplo inspirador de como a paixão e o
            trabalho duro podem levar ao sucesso no esporte.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-6">
            <SocialLink href="/" icon={InstagramIcon} />
            <SocialLink href="/" icon={GitHubIcon} />
            <SocialLink href="/" icon={LinkedInIcon} />
            <SocialLink href="/" icon={YoutTubeIcon} />
          </div>
        </div>
      </div>
    </section>
  );
}
