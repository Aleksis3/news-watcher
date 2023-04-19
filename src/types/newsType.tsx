export interface newsInterface {
  pagination: {
    total: number;
  };
  data: [
    {
      author: string;
      title: string;
      image: string;
      description: string;
      category: string;
      url: string;
    }
  ];
}
