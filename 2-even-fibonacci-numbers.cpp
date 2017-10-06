#include <iostream>

using namespace std;

/* By considering the terms in the Fibonacci sequence whose values do not
 * exceed four million, find the sum of the even-valued terms.
 */

int main(int argc, char* argv[])
{
        int prev = 0, next = 1, result = 0, sum = 0;

        while (result < 4000000) {
                result = prev + next;
                prev = next;
                next = result;
                if (result % 2 == 0) sum += result;
        }

        cout << sum << endl;

        return 0;
}
