package inheritance;

public class HierarchicalInheritance {

    public static void main(String[] args) {
        Smartphone obj = new Smartphone();
        obj.browse();
    }
}

class Phone {

    void call() {
        System.out.println("calling...");
    }
}

class Smartphone extends Phone {

    void browse() {
        System.out.println("Browsing..");
    }
}

class FeaturePhone extends Phone {

    void text() {
        System.err.println("Texting");
    }
}
