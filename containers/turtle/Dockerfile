# Slim version of Python
FROM python:3.11.6-slim

# Download Package Information
RUN apt-get update -y

# Install Tkinter
RUN apt-get install tk -y

COPY requirements.txt /

RUN python -m pip install -r requirements.txt

# Copy app
COPY artist_turtle.py /

# Commands to run Tkinter application
CMD ["artist_turtle.py"]

ENTRYPOINT ["python3"]
