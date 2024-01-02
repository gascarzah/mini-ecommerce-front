export interface BookPage {
    content:          Book[];
    pageable:         Pageable;
    last:             boolean;
    totalPages:       number;
    totalElements:    number;
    number:           number;
    sort:             Sort;
    size:             number;
    first:            boolean;
    numberOfElements: number;
    empty:            boolean;
}

export interface Book {
    id:        number;
    title:     string;
    slug:      string;
    desc:      string;
    price:     number;
    coverPath: string | null;
    filePath:  string | null;
    createdAt: Date;
    updatedAt: Date | null;
    category: Category
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    sort:       Sort;
    offset:     number;
    paged:      boolean;
    unpaged:    boolean;
}

export interface Sort {
    empty:    boolean;
    sorted:   boolean;
    unsorted: boolean;
}

export interface Category {
  id:        number;
  name:     string;
}
