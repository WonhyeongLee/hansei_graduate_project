export const wheatherOptions = [
  { value: '추움', label: '추움' },
  { value: '더움', label: '더움' },
  { value: '적당함', label: '적당함' }
  ];
  
  export const flavourOptions = [
    { value: '매운거', label: '매운거' },
    { value: '단거', label: '단거' },
    { value: '안매운거', label: '안매운거' },
  ];
  
  export const howOptions = [
   
    { value: '국물', label: '국물' },
    { value: '볶음', label: '볶음' },
    { value: '무침', label: '무침' },
    { value: '구이', label: '구이' },
    { value: '조림', label: '조림' },
    { value: '비빔', label: '비빔' },
    { value: '찜', label: '찜' },
    { value: '튀김', label: '튀김' }

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
  