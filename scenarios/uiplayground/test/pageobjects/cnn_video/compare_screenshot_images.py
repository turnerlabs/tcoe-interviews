# import numpy as np
import cv2
import sys
s1 = cv2.imread(sys.argv[1])
s2 = cv2.imread(sys.argv[2])
difference = cv2.subtract(s1, s2)
b, g, r = cv2.split(difference)
if cv2.countNonZero(b) == 0 and cv2.countNonZero(g) == 0 and cv2.countNonZero(r) == 0:
    #The images are completely Equal
    print("true")
else:
    #Images are different
    print("false")
