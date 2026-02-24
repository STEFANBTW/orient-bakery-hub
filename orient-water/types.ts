export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
  volume?: string;
}

export interface LabResult {
  batchId: string;
  date: string;
  bottlingTime: string;
  technician: string;
  ph: number;
  minerals: {
    calcium: number;
    magnesium: number;
    potassium: number;
    bicarbonates: number;
  };
  status: 'APPROVED' | 'PENDING' | 'REJECTED';
}

export interface Story {
  id: string;
  title: string;
  role: string;
  thumbnail: string;
}