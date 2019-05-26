//#include <cstdio>
#include <iostream>
#include <vector>

#include <string>
#include <stdio.h>
#include <stdlib.h>

#include <sstream>

using namespace std;

#pragma once

namespace mujNejmSpejs 
{
	class mojaKlasa
	{
	public:
		mujNejmSpejs::mojaKlasa::mojaKlasa();   // This is the constructor declaration
		mujNejmSpejs::mojaKlasa::~mojaKlasa();  // This is the destructor declaration

		//int[] getIntArray(int varInt, double varDouble, float varFloat);
		double mujNejmSpejs::mojaKlasa::sumXY2(double var_x, double var_y);
		int * intArray(int varInt1, int varInt2, int varInt3, int varInt4);
		char * GetVersionCharPtr();	// fcale nie musi byc zadeklarowane

	private:
		double x;
		double y;
	};

}