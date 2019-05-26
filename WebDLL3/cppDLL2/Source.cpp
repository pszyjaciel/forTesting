#include "Source.h"

#pragma once

namespace mujNejmSpejs {

	// constructor
	mojaKlasa::mojaKlasa(void) {
		cout << "Object is being created" << endl;
	}

	// destructor
	mojaKlasa::~mojaKlasa(void) {
		cout << "Object is being deleted" << endl;
	}

	double mojaKlasa::sumXY2(double var_x, double var_y)
	{
		return var_x + var_y;
	}

	extern "C" __declspec(dllexport) double sumTwo(double var_x, double var_y)
	{
		mujNejmSpejs::mojaKlasa mc;
		double result = mc.sumXY2(var_x, var_y);
		return result;
	}

	// pacz tu:
	// http://www.cplusplus.com/forum/beginner/67358/
	int * mojaKlasa::intArray(int varInt1, int varInt2, int varInt3, int varInt4) {
		static int myArray[10];
		myArray[0]= sizeof(myArray)/sizeof(int);
		myArray[1]= varInt1;
		myArray[2]= varInt2;
		myArray[3]= varInt3;
		myArray[4]= varInt4;
		myArray[5]= varInt1 + varInt2 + varInt3 + varInt4;

		return myArray;
	}

	extern "C" __declspec(dllexport) int * getIntArray(int varInt1, int varInt2, int varInt3, int varInt4)
	{
		mujNejmSpejs::mojaKlasa mc;
		int * result = mc.intArray(varInt1, varInt2, varInt3, varInt4);
		return result;
	}

	// returns a string
	extern "C" __declspec(dllexport) char * GetProjectPathPtr()
	{
		return "C:\\Users\\arlet\\Documents\\Visual Studio 2012\\Projects\\WebDLL3\\cppDLL2";
	}

	// returns a version string
	extern "C" __declspec(dllexport) char * GetVersionCharPtr()
	{
		return "Version 3.1.3";
	}

	// extern char * __stdcall GetVersionCharPtr()	
	// W bibliotece DLL 'cppDLL2.dll' nie mo¿na znaleŸæ punktu wejœcia o nazwie 'GetVersionCharPtr'.


}

