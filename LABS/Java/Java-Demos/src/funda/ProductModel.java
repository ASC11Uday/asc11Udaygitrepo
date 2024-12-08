package funda;

//Purpose of model classes is to represent the data 
//Structure of model classes is similar 
class ProductModel {

    private String productId = "p001";
    private String ProductName = "Lapiii";
    private int productPrice = 10000;

    @Override
    public String toString() {
        return "ProductModel  [productId =" + productId + ",productname=" + ProductName + "]";
    }

    //setter or mutator method
    public void setProductPrice(int productPrice) {
        if (productPrice < 0 || productPrice > 100000) {
            System.err.println("Invalid Product Price");
            return;
        }
        this.productPrice = productPrice;
    }
    // getter or accessor method

    public int getProductPrice(){
        return productPrice;
    }

}

class ProductModelEx {

    public static void main(String[] args) {
        ProductModel ProductModel = new ProductModel();
        System.out.println(ProductModel);
        ProductModel.setProductPrice(2000);
        System.out.println(ProductModel);
        ProductModel.setProductPrice(1000000);
        System.out.println(ProductModel);
        // System.out.println(ProductModel.getProductPrice());
    }
}
