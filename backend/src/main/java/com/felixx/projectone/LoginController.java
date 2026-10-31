package com.felixx.projectone;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
public class LoginController {
    @GetMapping("/api/login")
    public Map<String, String> login() {
        return Map.of("message", "Connection secured.");
    }
}
