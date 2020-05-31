package wooteco.subway.admin.controller.exceptionhandler;

import java.util.NoSuchElementException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import wooteco.subway.admin.dto.ExceptionResponse;
import wooteco.subway.admin.exception.NotConnectEdgeException;

@ControllerAdvice
public class GlobalControllerExceptionHandler {
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ExceptionResponse> handleConflict(IllegalArgumentException e) {
        return ResponseEntity.badRequest()
            .body(new ExceptionResponse(e.getMessage()));
    }

    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<ExceptionResponse> handleNoSuchElement(NoSuchElementException e){
        return ResponseEntity.badRequest()
            .body(new ExceptionResponse(e.getMessage()));
    }

    @ExceptionHandler(NotConnectEdgeException.class)
    public ResponseEntity<ExceptionResponse> handleNotConnectEdge(NotConnectEdgeException e){
        return ResponseEntity.badRequest()
            .body(new ExceptionResponse(e.getMessage()));
    }
}