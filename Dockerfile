FROM python:2.7

# based on python:2.7-onbuild, but if we use that image directly
# the above apt-get line runs too late.
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt /usr/src/app/
RUN pip install -r requirements.txt

RUN mkdir -p /usr/src/app/html
COPY html /usr/src/app/html

COPY server.py /usr/src/app/

CMD python server.py
