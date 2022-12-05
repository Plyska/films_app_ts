import Spiderman from "../imgs/spiderman.jpeg";
import Ironman from "../imgs/ironman.jpeg";
import Daredevil from "../imgs/daredevil.jpeg";

export interface MockFilm {
  id: number;
  title: string;
  path: string;
  plot: string;
}

export const dataForSlider: Array<MockFilm> = [
  {
    id: 1,
    title: "Spider-man",
    path: Spiderman,
    plot: "In Ixtenco, Mexico, Nick Fury and Maria Hill investigate an unnatural storm and encounter the Earth Elemental. Quentin Beck, a super-powered individual, arrives to defeat the creature, and is subsequently recruited by Fury and Hill. In New York City, the Midtown School of Science and Technology completes its year, which was restarted to accommodate the students who previously disintegrated five years earlier as a result of Thanos' actions.[N 1] They had reappeared un-aged, thanks to the actions of the Avengers.[N 2] The school organizes a two-week summer field trip to Europe, where Peter Parker—who is still mourning the death of his mentor Tony Stark—plans to reveal to classmate MJ his attraction to her. Happy Hogan informs Parker that Fury intends to contact him, but Parker ignores Fury's phone call.",
  },
  {
    id: 2,
    title: "Ironman",
    path: Ironman,
    plot: "Tony Stark, who has inherited the defense contractor Stark Industries from his late father Howard Stark, is in war-torn Afghanistan with his friend and military liaison, Lieutenant colonel James Rhodes, to demonstrate the new Jericho missile. After the demonstration, the convoy is ambushed and Stark is critically wounded by a missile used by the attackers: one of his company's own. He is captured and imprisoned in a cave by a terrorist group called the Ten Rings. Yinsen, a fellow captive doctor, implants an electromagnet into Stark's chest to keep the shrapnel shards that wounded him from reaching his heart and killing him. Ten Rings leader Raza offers Stark freedom in exchange for building a Jericho missile for the group, but he and Yinsen know that Raza will not keep his word.",
  },
  {
    id: 3,
    title: "Daredevil",
    path: Daredevil,
    plot: "When Murdock was a boy, his father was murdered for winning a match he was told to throw. Now, after failing to rescue the kidnapped boy, a severely injured Murdock is found in a dumpster by nurse Claire Temple. Nelson meanwhile attempts to comfort Page following her recent traumatic experiences. Temple takes Murdock to her apartment, tends to his wounds, and removes his mask, discovering his blindness. He refuses to reveal his name, but does reveal his heightened senses when they alert him to a Russian who is searching the apartment building, giving Temple time to hide Murdock and convince the man that she knows nothing. Murdock realizes that the man did not believe her, and overpowers him, taking him to the roof. Murdock and Temple torture him into revealing the boy's location, before Murdock pushes him off the roof and into the same dumpster. He barely survives. Murdock enters the building where they are keeping the boy, defeats the guards, and rescues him.",
  },
];
