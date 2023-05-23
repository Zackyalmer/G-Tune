import numpy as np
from scipy.fft import fft

# Generate a sample signal
t = np.linspace(0, 1, 1000, endpoint=False)
x = np.sin(2 * np.pi * 50 * t) + 0.5 * np.sin(2 * np.pi * 100 * t)

# Compute FFT
X = fft(x)

# Compute magnitude spectrum
mag_spectrum = 2 * np.abs(X) / len(X)

# Compute frequency axis
freq_axis = np.linspace(0, 1, len(X))

# Plot the results
import matplotlib.pyplot as plt
plt.plot(freq_axis, mag_spectrum)
plt.xlabel("Frequency (Hz)")
plt.ylabel("Magnitude")
plt.show()