export type productDataType = {
  id: string
  active?: boolean;
  dateCreated?: Date;
  description?: string;
  categories?: string
  imageUrl?: string // add in schema
  lastUpdated: Date;
  name: string;
  sku: string;
  unitPrice: number;
  unitInStock: number;
  price: number
}

export type productDataTypeKey = keyof productDataType
