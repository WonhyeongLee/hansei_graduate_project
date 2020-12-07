export const wheatherOptions = [
  { value: '추울때', label: '추울때' },
  { value: '더울때', label: '더울때' },
  { value: '비가올때', label: '비가올때' },
  { value: '눈이올때', label: '눈이올때' }
  ];
  
  export const flavourOptions = [
    { value: '매운맛', label: '매운맛' },
    { value: '단맛', label: '단맛' },
    { value: '신맛', label: '신맛' },
    { value: '쓴맛', label: '쓴맛' },
    { value: '기름짐', label: '기름짐' },
    { value: '담백함', label: '담백함' },
    { value: '개운함', label: '개운함' },
    { value: '얼큰함', label: '얼큰함' }
  ];
  
  export const howOptions = [   
    { value: '국', label: '국' },
    { value: '찌개', label: '찌개' },
    { value: '볶음', label: '볶음' },
    { value: '무침', label: '무침' },
    { value: '구이', label: '구이' },
    { value: '조림', label: '조림' },
    { value: '비빔', label: '비빔' },
    { value: '찜', label: '찜' },
    { value: '튀김', label: '튀김' },
    { value: '부침', label: '부침' }
  ];

  export const timeOptions = [
    { value: '아침', label: '아침' },
    { value: '점심', label: '점심' },
    { value: '저녁', label: '저녁' }
    ];
  
      
  export const groupedOptions = [
    {
      label: '날씨',
      options: wheatherOptions,
    },
    {
      label: '맛',
      options: flavourOptions,
    },
    {
      label: '조리방법',
      options: howOptions,
    },
    {
      label: '식사시간',
      options: timeOptions,

    }
  ];
  