const katas = [
    {
      name: "Sanchin  (三戦)", 
      description: "A foundational kata in Uechi-Ryu. It focuses on breathing, posture, and concentration.",
      video:"https://www.youtube.com/embed/B7YDkZrJ-V0" 
    },
    {
        name: "Kanshiwa (感柔)", 
        description: "This kata introduces several new techniques, including open-hand strikes and the toe kick.",
        video: "https://www.youtube.com/embed/So-LhG9GvFY"
    },
    {
        name: "Kanshu (感手)", 
        description: "Known as a 'rotational' kata, Kanshu introduces new body dynamics to the practitioner.",
        video: "https://www.youtube.com/embed/6covjfrlOrY"
    },
      {
        name: "Seichin (制鎮)", 
        description: "Seichin introduces one-handed techniques and the spearhand strike.",
        video: "https://www.youtube.com/embed/kufil9L2L_k"
      },
      {
        name: "Seisan (十三)", 
        description: "A fundamental kata of Uechi-Ryu that has direct lineage to Chinese boxing.",
        video: "https://www.youtube.com/embed/y5ut-dmu_cY"
      },
      {
        name: "Seiryu (制竜)", 
        description: "Seiryu incorporates techniques performed while moving on a single line.",
        video: "https://www.youtube.com/embed/VOgOKN-zjXo"
      },
      {
        name: "Kanchin  (観鎮)", 
        description: "Kanchin is a distinctive kata in Uechi-Ryu, introducing advanced concepts and techniques. This kata includes challenging movements that require a good understanding of balance, power generation, and body mechanics. It encourages the practitioner to focus on circular movement and the effective use of open-hand techniques.",
        video: "https://www.youtube.com/embed/3ro32DCpTv8"
      },
      {
        name: "Sanseirui (三十六)", 
        description: "One of the more complex katas, Sanseirui includes techniques for a variety of combat situations.",
        video: "https://www.youtube.com/embed/lHAe3dNf-oQ"
      },
                
  ];
  
  function generateKata() {
    const randomIndex = Math.floor(Math.random() * katas.length);
    const kata = katas[randomIndex];
    document.getElementById('kata').textContent = kata.name;
    document.getElementById('description').textContent = kata.description;
    
    const videoContainer = document.getElementById('video');
    videoContainer.src = kata.video;
    document.body.style.backgroundColor = getRandomGreyColor();
  }
  
  function getRandomGreyColor() {
    const range = [160, 199];  // White/grey-ish colors range
    const randomValue = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
    return `rgb(${randomValue}, ${randomValue}, ${randomValue})`;
  }
  


document.getElementById('generate-btn').addEventListener('click', generateKata);
