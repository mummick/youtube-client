export type CustomCardFields = 'title' | 'description' | 'imgURL' | 'videoURL' | 'publishedAt';
export type StateCustomCard = Record<CustomCardFields, string>;

export type StateCustomList = ReadonlyArray<StateCustomCard>;
