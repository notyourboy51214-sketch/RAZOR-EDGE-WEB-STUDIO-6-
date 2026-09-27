export type PageId =
  | 'the-cut'
  | 'services'
  | 'fade-room'
  | 'beard-edit'
  | 'the-shop'
  | 'the-team'
  | 'customer-notes'
  | 'book-a-slot'
  | 'visit';

export type ServiceType =
  | 'Haircut'
  | 'Fade'
  | 'Beard Trim'
  | 'Haircut + Beard'
  | 'Other';

export interface BookingData {
  service: ServiceType;
  day: string;
  time: string;
  note: string;
  referenceId: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  period?: string;
  text: string;
  category: 'all' | 'fade' | 'haircut' | 'beard' | 'staff' | 'experience';
  source: 'Google Review';
  isCritical?: boolean;
}
