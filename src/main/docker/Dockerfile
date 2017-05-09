FROM frolvlad/alpine-oraclejdk8:slim
VOLUME /tmp
ADD test1-0.1-SANPSHOT.jar app.jar
RUN sh -c 'touch /app.jar'
ENV JAVA_OPTS="-Xmx256m -XX:MaxPermSize=128M"
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]
