// Este programa recebe como entrada dois números inteiros A e B, com 1<=A<=B<=2^31-1. 
// Ele imprime a quantidade de números palíndromos que existem entre A e B, inclusive.
// Este programa termina quando A=B=0.

// Raphael Rocha da Silva. Março de 2016. 
// Informações em: http://raphsilva.github.io 


#include <iostream>
using namespace std;


int pow (int b, int e) 
// Retorna o número b^e.
{
  if (e<=0)
    return 1;
  int r = 1; 
  while (e--) {
    r *= b; 
  }
  return r;
}


int contaPaliDigs (int d) 
//Conta quantos palíndromos de d dígitos existem.
{
  if (d%2==0)
    return 9*pow (10, d/2-1);
  else
    return 9*pow (10, d/2);
}


int digs (int n) 
// Retorna a quantidade de dígitos de um número
{
  int c = 0;
  while (n>0) {
    c++;       
    n = n/10;  
  }
  return c;
}


int reflexo (int n) 
// Retorna o número formado pelos dígitos de n na ordem inversa
{
  int d = digs(n);
  int r = 0;  
  while (n>0) {
    r += n%10*pow(10,d-1);   
    d--;  
    n = n/10;  
  }
  return r;
}
  
  
int contaPaliDigsMenor (int N)
// Conta quantos palíndromos de D dígitos menores ou iguais a N existem, N contendo D dígitos.
{
  if (N <= 9) 
    return N-1;
  
  int D = digs(N);              // Quantidade de dígitos de N
  int Ma = N/(pow(10,(D+1)/2)); // Primeira metade do número
  int Mb = N%(pow(10,D/2));     // Segunda metade do número
  int Dm = digs(Ma);            // Quantidade de dígitos de cada uma das metades
  int M0 = pow(10,Dm-1);        // Menor inteiro de Dm dígitos
  
  int c;      
  
  if (D%2==0) {
    c = (Ma-1)-M0 +1;           // Conta todos os palíndromos cuja primeira metade seja menor que Ma.
    if (reflexo(Ma) < Mb) {     // Se o reflexo de Ma for menor que Mb, 
      c++;                      // Conta o palíndromo cuja primeira metade é igual a Ma.
    }
  }
  else {
    int M = (N/pow(10,D/2))%10;;   // Dígito do meio
    c = ((Ma-1)-M0 +1)*10;         // Conta todos os palíndromos cuja primeira metade seja menor que Ma.
    c += M;                        // Conta os palíndromos cuja primeira metade seja igual a Ma e cujo dígito do meio seja menor que M
    if (reflexo(Ma) < Mb) {        // Se o reflexo de Ma for menor que Mb, 
      c++;                         // Conta o palíndromo cuja primeira metade é igual a Ma e cujo dígito do meio é igual a M
    }
  }
  return c;
}


int contaPali (int N)
{
// Retorna a quantidade de palíndromos menores ou iguais a N que existem.
  int D = digs(N);
  int c = 0;  
  
  for (int i=1; i<=D-1; i++) {
    c += contaPaliDigs(i);
  }
  
  c += contaPaliDigsMenor(N);
  return c;
}


int main ()
{
  while (true)
  {
    int A, B;
    cin>>A>>B;
      
    if (A==0)
      return 0;
    
    B = B+1;

    cout << contaPali(B) - contaPali(A) << endl;
    
  }  
}
