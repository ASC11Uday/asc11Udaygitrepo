package inheritance;

public class FinalEx {
    public static void main(String[] args) {
        TestFinal testFinal = new TestFinal();
        testFinal.test("Thursday");
        testFinal.test1("9:53");
    }
}

final class Test {
}

class Base2 {
    public void Base2Method1() {
        System.out.println("Base2Method1");
    }

    public final void Base2Method2() {
        System.out.println("Base2Method2");
    }
}

class Derived2 extends Base2 {
    final String day = "Thursday";
    final String month;

    Derived2() {
        month = "June";
    }

    @Override
    public void Base2Method1() {
        System.out.println("Base2Method1 Overridden");
    }
}

class TestFinal {
    public void test(final String day) {
        System.out.println(day);
    }
    public void test1(String time) {
        System.out.println(time);
        time = "9:54";
        System.out.println(time);
    }
}

