function handleLogin(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Aqui ligará a lógica do seu Backend futuramente
            console.log('Tentativa de login com:', { email, password });
            alert('Lógica de login acionada! Próximo passo: conectar à API.');
        }