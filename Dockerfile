FROM python:alpine

WORKDIR /app

RUN pip install flask
RUN echo * 

EXPOSE 5000

CMD echo * 

CMD python app.py
