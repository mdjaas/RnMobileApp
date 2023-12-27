class ProductItemResponse {
  constructor(data) {
    this.title = data?.title;
    this.thumbnail = data?.thumbnail;
    this.brand = data?.brand;
    this.category = data?.category;
    this.description = data?.description;
    this.price = data?.price;
  }
}

export default ProductItemResponse;
